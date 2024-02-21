import Image from "next/image"
const ContactPage = () => {
  return (
    <div className="bg-gray-100 p-3">
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or inquiries? Feel free to reach out to us!
          </p>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
            <p className="text-gray-700">
              123 Marketing Street<br />
              Cityville, State 12345<br />
              Country
            </p>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-700">
              Email: info@example.com<br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700">
            Reach out to us via the form below or through our contact information.
          </p>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto flex items-center justify-center">
          <Image
            className="rounded-full w-20 h-20 md:w-32 md:h-32 mb-8 md:mb-0"
            src="https://source.unsplash.com/200x200/?contact"
            alt="Contact"
            width={800}
            height={400}
          />
          <div className="ml-4">
            <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
            <p className="text-gray-700">
              We wouldd love to hear from you!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactPage