import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { GitBranchPlus, Github, X } from 'lucide-react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';

interface LoginFormProps {
    open: boolean;
    onClose: () => void;
}

export function LoginPopup({ open, onClose }: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
                <DialogHeader className="p-3">
                    <DialogTitle className="text-xl font-semibold text-teal-800">
                        Log in with your SmitGrade  account
                    </DialogTitle>
                </DialogHeader>

                <div className="px-6 py-4">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-teal-800 font-medium">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                className="w-full border-gray-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-teal-800 font-medium">
                                    Password
                                </Label>
                                <a href="#" className="text-teal-600 text-sm hover:underline">
                                    Forgot your password?
                                </a>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                className="w-full border-gray-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-emerald-400 hover:bg-emerald-500 text-black"
                        >
                            Log In
                        </Button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">Or log in with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                            <span className="flex items- gap-2 justify-center">
                                <BsGithub />

                                Github
                            </span>
                        </Button>
                        <Button variant="outline" className="w-full">
                            <span className="flex items-center gap-2 justify-center">
                                <FaGoogle />
                                Google
                            </span>
                        </Button>
                    </div>


                </div>
            </DialogContent>
        </Dialog>
    );
}

export default LoginPopup;