import { productCategories } from '@/data/products'
import { IMAGES } from '@/config/cloudinary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, Package, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function generateStaticParams() {
    return productCategories.map((category) => ({
        category: category.id,
    }))
}

interface PageProps {
    params: {
        category: string
    }
}

export default function CategoryPage({ params }: PageProps) {
    const categoryData = productCategories.find(
        (cat) => cat.id === params.category
    )

    if (!categoryData) {
        notFound()
    }

    const images =
        IMAGES.products[params.category as keyof typeof IMAGES.products] || []

    return (
        <>
            <Navbar />

            <section className="relative overflow-hidden py-6 px-4">
                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center mb-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy-50 border border-burgundy-100 rounded-full mb-3">
                            <Sparkles className="w-4 h-4 text-burgundy-600" />
                            <span className="text-sm text-burgundy-700 font-medium">
                                {categoryData.name}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            {categoryData.shortDescription}
                        </h1>

                        <p className="text-gray-600 text-base max-w-2xl mx-auto">
                            {categoryData.description}
                        </p>
                    </div>

                </div>
            </section>



            <section className="py-0">
                <div className="max-w-7xl mx-auto px-4">
                    {images.length === 0 ? (
                        <p className="text-center text-gray-500">
                            No images available for this category.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative w-full h-[420px] overflow-hidden rounded-xl shadow-lg"
                                >
                                    <Image
                                        src={src}
                                        alt={`${categoryData.name} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                                        priority={index < 3}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="py-24 px-4 relative overflow-hidden bg-gray-50">
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-3xl shadow-xl p-12 transition-transform duration-500">

                        <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Package className="text-white" size={36} />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Can’t Find What You’re Looking For?
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Our expert team can help you choose the perfect{" "}
                            <span className="font-medium text-gray-900">
                                {categoryData.name.toLowerCase()}
                            </span>{" "}
                            for your space. Get personalized recommendations and exclusive deals.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contact Us
                            <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>

                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}
