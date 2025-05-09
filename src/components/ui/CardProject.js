// src/components/ui/CardProject.js
import Link from "next/link";
import Image from "next/image";

export function CardProject({ title, description, imageSrc, href }) {
  return (
    <article className="group rounded-2xl bg-heli-white shadow-subtle transition hover:shadow-lg hover:-translate-y-1">
      <div className="h-56 w-full rounded-t-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={224}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-heading group-hover:text-heli-peach transition">
          {title}
        </h3>
        <p className="mt-2 text-sm text-heli-gray">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-block text-sm underline hover:text-heli-peach"
        >
          Case study →
        </Link>
      </div>
    </article>
  );
}
