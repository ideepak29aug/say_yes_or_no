import Love from "../components/Love";

export default function Page() {
  return (
    <Love
      imageSrc="/peach-goma-phone.gif"
      message="Manja na! Kitna bhav khaegi yrr😭"
      yesLink="/yes"
      noLink="#"
      noButtonId="move-random"
    />
  );
}
