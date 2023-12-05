export default function About() {
  return (
    <div className="d-flex align-items-center">
      {/* profile photo */}
      <img
        className="rounded mb-5"
        src="src/assets/images/David-Profile-Photo.jpeg"
        alt="David Wright"
        width="200"
      />
      {/* short bio */}
      <p className="mx-3">
        I&apos;m an aerospace engineer and full-stack web developer
        from the Pacific Northwest, transplanted to the Silicon Valley.
        Tech has always been a fascination for me, from software to spacecraft.
        When I&apos;m not coding or doing rocket science, I enjoy thinking about
        coding and rocket science.
      </p>
    </div>
  );
}