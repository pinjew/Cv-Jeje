import { Card } from "flowbite-react";
import picture from '../assets/img/Profile.png';

export const Profile = () => {
    return (
        <Card className="max-w-full dark:bg-white">
            <section id="profile" class="profile container mt-2 md:mt-5" >
                <div class="flex flex-col-reverse md:flex-row items-center">
                    <div class="w-full md:w-2/3 order-2 md:order-1">
                        <h3 class="font-semibold text-3x1">Hallo! I am</h3>
                        <h1 class="font-bold text-3xl nama">Vinze Louis Adriansyah</h1>
                        <p>I am a Web Designer </p>
                        <p>Contact</p>
                        <p>Phone Number : +62 83162188771</p>
                        <p>Email : adrianlouis330@gmail.com</p>
                        <p>Jalan Sukajadi,No.292,Kota Bandung,Jawa Barat</p>
                    </div>
                    <div class="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end">
                        <img  src={picture} alt="Potrait" class="max-w-full rounded-full"/>
                    </div>
                </div>
                
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tentang Saya</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Saya Vinze Louis Adriansyah atau bisa di panggil JEJE, Siswa jurusan Software Engineer di SMK Prakarya Internasional. Saya suka sekali dunia digital dan Desain. Saat ini, Saya sedang mendalami UI dan UX untuk menciptakan produk digital yang tidak hanya berfungsi, tapi juga menyenangkan untuk digunakan.</p>
</a>


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skill</h5>

<ol class="space-y-4 w-72">
<li>
        <div class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Confirmation</span>
                <h3 class="font-medium">1. HTML</h3>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Confirmation</span>
                <h3 class="font-medium">2. CSS</h3>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Confirmation</span>
                <h3 class="font-medium">3. Design Web</h3>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Review</span>
                <h3 class="font-medium">4. Figma</h3>
            </div>
        </div>
    </li>
        <li>
        <div class="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Confirmation</span>
                <h3 class="font-medium">5. PHP</h3>
            </div>
        </div>
    </li>
</ol>

</a>


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PENDIDIKAN</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">SMK Prakarya Internasional 2023</p>
</a>



            </section>
       </Card>
    )
}
