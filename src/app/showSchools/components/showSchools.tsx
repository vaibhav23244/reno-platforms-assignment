import Link from "next/link";

const schools = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Machined Pencil and Pen Set",
    color: "Black",
    price: "$70",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-03.jpg",
    imageAlt: "12-sided, machined black pencil and pen.",
  },
  {
    id: 3,
    name: "Mini-Sketchbooks",
    color: "Light Brown",
    price: "$27",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-04.jpg",
    imageAlt: "Set of three light and dark brown mini sketch books.",
  },
  {
    id: 4,
    name: "Organizer Set",
    color: "Walnut",
    price: "$149",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-01.jpg",
    imageAlt: "Beautiful walnut organizer set with multiple white compartments",
  },
];

export default function ShowSchools() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div>
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Schools Directory
            </h2>
            <span className="text-sm font-medium text-indigo-600">
              Showing {schools.length} schools
            </span>
          </div>
          <Link
            href="addSchool"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Add School
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {schools.map((school) => (
          <div key={school.id} className="group relative">
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72">
              <img
                alt={school.imageAlt}
                src={school.imageSrc}
                className="size-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              <a href={school.href}>
                <span className="absolute inset-0" />
                {school.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{school.color}</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {school.price}
            </p>
          </div>
        ))}

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="addSchool"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Add School
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
