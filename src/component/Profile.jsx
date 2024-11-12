import { Card } from "flowbite-react";
import picture from '../assets/img/Profile.png';

export const Profile = () => {
    return (
        <Card className="max-w-full dark:bg-white">
            <section id="profile" class="profile container mt-2 md:mt-5" >
                <div class="flex flex-col-reverse md:flex-row items-center">
                    <div class="w-full md:w-2/3 order-2 md:order-1">
                        <h3 class="font-semibold text-3x1">Hi! I am</h3>
                        <h1 class="font-bold text-3xl nama">Muhammad Brama Antoro</h1>
                        <p>I am a Web developer in Indonesia</p>
                    </div>
                    <div class="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end">
                        <img src={picture} alt="Potrait" class="max-w-full"/>
                    </div>
                </div>
            </section>
        </Card>
    )
}
