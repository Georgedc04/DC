export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded"
          rows={5}
        />

        <button className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}