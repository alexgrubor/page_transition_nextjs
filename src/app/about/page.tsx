import Image from "next/image"
const AboutPage = () => {
  return (
    <div className="bg-gray-100">
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <Image
          className="rounded-lg w-[80%] md:w-2/3 mx-auto mb-8"
          src="https://source.unsplash.com/800x400/?story"
          alt="Our Story"
          width={800}
          height={400}
        />
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </section>

    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <Image
          className="rounded-lg w-[80%] md:w-2/3 mx-auto mb-8"
          src="https://source.unsplash.com/800x400/?team"
          alt="Our Team"
          width={800}
          height={400}
        />
        <p className="text-gray-700">
          Meet the talented individuals who make our marketing agency thrive. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <Image
          className="rounded-lg w-[80%] md:w-2/3 mx-auto mb-8"
          src="https://source.unsplash.com/800x400/?mission"
          alt="Our Mission"
          width={800}
          height={400}
        />
        <p className="text-gray-700">
          Our mission is to provide innovative and effective marketing solutions for our clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  </div>
  )
}
export default AboutPage