"use client"

import { ReactNode, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type ModalProps = {
    title: string;
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export default function Modal({ title, isOpen, onClose, children }: ModalProps) {

    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow
            document.body.style.overflow = "hidden"

            return () => {
                document.body.style.overflow = originalOverflow
            }
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-end justify-center lg:items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    {/* Overlay */}
                    <div onClick={onClose} className="absolute inset-0 bg-gray-dark opacity-75" />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white w-full rounded-t-md mt-auto pb-2 pt-8 px-6 lg:w-120 lg:rounded-2xl lg:mt-0 z-10 shadow-xl"
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Image
                            className="ml-auto cursor-pointer"
                            width={15}
                            height={15}
                            alt="Close modal"
                            src="/icons/x.svg"
                            onClick={onClose}
                        />

                        <div className="flex-1 mt-4">

                            <h2 className="text-2xl font-bold mb-10">
                                {title}
                            </h2>

                            {children}
                        </div>

                        <div className="h-1.5 w-30 bg-gray-300 rounded mt-10 mx-auto" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}