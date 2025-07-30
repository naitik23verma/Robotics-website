export default function Gallery() {
  const galleryItems = [
    "https://api.builder.io/api/v1/image/assets/TEMP/44e6b96006c2063186188e1cdb7da46198c2e1a6",
    null,
    null,
    null,
    null,
    null,
  ];

  return (
    <section className="bg-[#0F1B35] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-[#9CF185] font-roboto text-4xl font-bold text-center mb-16">
          Gallery Highlights
        </h2>

        <div className="grid grid-cols-6 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="aspect-square">
              {item ? (
                <img
                  src={`${item}?width=400`}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
