import Image from "next/image";

export default function Deserts() {
  return (
    <div>
      <h2>Desert recipes</h2>
      <p>The most yummy deserts! </p>
      <Image
        alt="cake"
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        width="2400"
        height="1599"
        layout="responsive"
      ></Image>
    </div>
  );
}
