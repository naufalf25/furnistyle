import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

function AboutPage() {
  return (
    <section>
      <div className="flex min-h-[40vh] flex-col items-center justify-center gap-10 bg-linear-150 from-[#FDE68A] to-[#FCA5A5] p-4 md:p-10">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Tentang Kami
        </h2>
        <p className="font-medium italic md:w-[80%]">
          Furnistyle hadir untuk membantu Anda menemukan furniture yang tepat —
          menggabungkan kenyamanan, estetika, dan fungsionalitas dalam satu
          tempat. Kami percaya bahwa ruang yang tertata dengan baik akan membuat
          hidup lebih nyaman dan produktif.
        </p>
      </div>
      <div className="mt-20 flex flex-col gap-4 p-4 md:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32658954.088671185!2d95.99891313682033!3d-2.269515237500024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1753487796102!5m2!1sid!2sid"
          width="600"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="md:w-2/3"
        ></iframe>
        <div className="bg-blue-950 p-4 text-white md:w-1/3">
          <h3 className="text-center text-lg font-semibold md:text-xl">
            Informasi Kontak
          </h3>
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <BsFillTelephoneFill className="text-2xl" />
              <p>+62-123-4567-890</p>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-2xl" />
              <p>furnistyle.id</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
