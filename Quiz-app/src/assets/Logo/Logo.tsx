import Image from "next/image";
import LogoQuiz from "@/assets/logo-quiz-sf.png";

export default function Logo() {
    return (
        <div className="relative flex justify-center pb-2">
            <Image className="fill" src={LogoQuiz} width={300} alt="logo" />
        </div>
    );
}