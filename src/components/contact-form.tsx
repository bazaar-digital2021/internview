import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'


import { Textarea } from './ui/textarea'

interface ContactDetails {

}

interface ContactFormProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactForm: React.FC<ContactFormProps> = ({ open, setOpen }) => {

    const [email, setEmail] = useState('')

    const [name, setName] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [query, setQuery] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        // Regular expression for basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailPattern.test(emailValue));
    };
    const submitContact = async () => {

        // const createContact = await contactUs(name, email, phoneNumber,workSpace,query)
        // if (createContact) {
        //     toast.success('Thankyou For Choosing Monitorx')
        //     setOpen(false)
        // }
        // else {
        //     toast.error('Something went wrong please try again...')
        // }
    }


    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="sm:max-w-[710px] p-6 top-4 translate-y-0 translate-x-[-50%] overflow-y-scroll duration-500 ease-in-out">
                <DialogHeader className='border-b '>
                    <DialogTitle className="">Contact Us</DialogTitle>
                </DialogHeader>
                <form>
                    <Label htmlFor="name" aria-required className='text-sm font-semibold text-slate-600'>Name <span className="text-red-500">*</span></Label>
                    <Input id='name' value={name} onChange={(e) => setName(e.target.value)} className='mb-4'></Input>

                    <Label htmlFor="email" className='mt-4'>
                        E-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="email"
                        placeholder="email@example.com"
                        value={email}
                        type="email"
                        onChange={handleEmailChange}
                        required
                    />
                    <p className={`text-sm ${isEmailValid ? "text-muted-foreground" : "text-red-500"}`}>
                        {isEmailValid ? "You should provide a valid email." : "Please enter a valid email address."}
                    </p>

                    <Label htmlFor="number" className='mt-4'>
                        Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        type="tel"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="flex-1 text-black"

                        required
                    />

                    <Label htmlFor="number" className='mt-4'>
                        Enter Query<span className="text-red-500">*</span>
                    </Label>
                    <Textarea typeof='text' placeholder='Enter Your Qury here....' className='min-h-20'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <div className='mt-4 flex gap-4 justify-end'>
                        <Button className='bg-white hover:bg-slate-300 text-gray-500' onClick={(e) => { setOpen(false); e.preventDefault() }} >Cancel</Button>

                        <Button type='submit' className='bg-primary text-white disabled:bg-primary/60 disabled:text-black' disabled={query.length < 3 || phoneNumber.length !== 10 || !isEmailValid || !email} onClick={(e) => { submitContact(); e.preventDefault() }} >Contact Us</Button>

                    </div>

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ContactForm
