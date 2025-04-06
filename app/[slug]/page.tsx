import React from 'react';
import Link from 'next/link';
import Related from '@/components/related';
import Comment from '@/components/comment';
import {
  User,
  Calendar,
  Bookmark,
  Tags,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Music,
} from 'lucide-react';

export async function generateStaticParams() {
  return [];
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
    <div className="container xl:max-w-6xl mx-auto px-4 flex flex-col gap-4 lg:gap-6">
      <div className="grid grid-cols-1 py-6">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl lg:text-4xl md:text-center font-medium py-4">
            Top 10 Must-Try Street Foods Around The World
          </h1>
          <div className="pb-4 w-full flex items-center md:justify-center gap-4 text-sm text-neutral-500 border-b border-dashed border-neutral-200">
            <Link
              href="#"
              rel="author"
              className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
            >
              <User size={16} className="me-2" />
              <span>by aribudin</span>
            </Link>
            <time className="news-date" dateTime="2024-06-16">
              <Calendar size={16} className="me-2" />
              <span>May 11, 2024</span>
            </time>
            <Link
              href="#"
              rel="category"
              className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
            >
              <Bookmark size={16} className="me-2" />
              <span>Lifestyle</span>
            </Link>
          </div>

          <div className="relative post-content pt-4">
            <p>
              Exploring street foods around the world is an adventure for your taste buds. From
              savory to sweet, spicy to tangy, each bite tells a story of culture, tradition, and
              culinary creativity. Here's a list of the top 10 must-try street foods that will take
              you on a delicious journey across continents.
            </p>
            <div className="aspect-[2/1] overflow-hidden w-full bg-neutral-100 mb-8">
              <img src="/img/blogs/2.jpg" alt="Post image" className="w-full" />
            </div>

            <h2>1. Banh Mi - Vietnam</h2>
            <p>
              Banh Mi is a Vietnamese sandwich consisting of a crusty baguette filled with various
              ingredients such as grilled pork, pate, pickled vegetables, and fresh herbs. It offers
              a perfect balance of flavors and textures, making it a beloved street food not only in
              Vietnam but also around the world.
            </p>
            <p>
              It's a must-try for any food enthusiast visiting Vietnam, offering a delightful
              culinary experience that captures the essence of Vietnamese cuisine.
            </p>
            <p>Where to try: Streets of Ho Chi Minh City or Hanoi.</p>

            <h2>2. Tacos al Pastor - Mexico</h2>
            <p>
              Tacos al Pastor is a quintessential Mexican street food made with thinly sliced pork
              marinated in a combination of spices and chilies, then cooked on a vertical
              rotisserie. The tender, flavorful meat is typically served on small corn tortillas and
              topped with pineapple, onions, cilantro, and salsa.
            </p>
            <p>
              These mouthwatering tacos are a staple of Mexican street food culture, offering a
              delicious taste of Mexico's rich culinary heritage.
            </p>

            <h2>3. Pad Thai - Thailand</h2>
            <p>
              Pad Thai is a popular Thai street food dish consisting of stir-fried rice noodles with
              eggs, tofu, shrimp or chicken, bean sprouts, and peanuts, seasoned with a tangy
              tamarind sauce. It's a flavorful and satisfying dish that perfectly embodies the
              balance of sweet, sour, salty, and spicy flavors that Thai cuisine is known for.
            </p>
            <p>Where to try: Streets of Bangkok or night markets throughout Thailand.</p>

            <h2>4. Poutine - Canada</h2>
            <p>
              Poutine is a beloved Canadian dish originating from Quebec, consisting of crispy
              french fries topped with cheese curds and smothered in rich gravy. The combination of
              crispy, creamy, and savory flavors makes it a comforting and indulgent street food
              favorite, especially during cold winter months.
            </p>
            <p>Where to try: Poutineries across Canada, especially in Quebec.</p>

            <h2>5. Churros - Spain</h2>
            <p>
              Churros are a classic Spanish street food made from deep-fried dough, often dusted
              with cinnamon sugar. They are crispy on the outside, soft and fluffy on the inside,
              and best enjoyed dipped in thick chocolate sauce or dulce de leche.
            </p>
            <p>
              Where to try: Churrerias in cities across Spain, especially in Madrid and Barcelona.
            </p>

            <h2>6. Bánh Xèo - Vietnam</h2>
            <p>
              Bánh Xèo, also known as Vietnamese sizzling crepes, are crispy pancakes filled with
              shrimp, pork, bean sprouts, and herbs, served with fresh lettuce leaves and dipping
              sauce. The name "Bánh Xèo" comes from the sizzling sound the batter makes when poured
              into the hot skillet.
            </p>
            <p>Where to try: Streets of Ho Chi Minh City or Hoi An.</p>

            <h2>7. Falafel - Middle East</h2>
            <p>
              Falafel is a popular Middle Eastern street food made from ground chickpeas or fava
              beans, mixed with herbs and spices, then deep-fried until crispy. It is often served
              in pita bread with tahini sauce, salad, and pickled vegetables.
            </p>
            <p>
              Where to try: Falafel stands in cities throughout the Middle East, such as Jerusalem,
              Cairo, and Beirut.
            </p>

            <h2>8. Sushi - Japan</h2>
            <p>
              Sushi is a Japanese staple consisting of vinegared rice topped or rolled with various
              ingredients such as raw fish, seafood, vegetables, and sometimes tropical fruits. It
              is often served as a quick and convenient street food option in Japan.
            </p>
            <p>
              Where to try: Sushi stalls in bustling marketplaces like Tsukiji Fish Market in Tokyo
              or Nishiki Market in Kyoto.
            </p>

            <h2>9. Arepas - Colombia</h2>
            <p>
              Arepas are traditional Colombian street food made from cornmeal dough, which is formed
              into patties and grilled, baked, or fried until crispy on the outside and soft on the
              inside. They are often split open and filled with various ingredients such as cheese,
              meat, avocado, or eggs.
            </p>
            <p>
              Where to try: Areperas in cities across Colombia, especially in Bogotá and Medellín.
            </p>

            <h2>10. Currywurst - Germany</h2>
            <p>
              Currywurst is a popular German street food consisting of sliced, grilled pork sausage
              topped with curry ketchup and sprinkled with curry powder. It is typically served with
              fries or bread rolls and enjoyed as a hearty snack or quick meal.
            </p>
            <p>
              Where to try: Imbiss stalls and food stands in cities throughout Germany, especially
              in Berlin.
            </p>

            <ul>
              <li>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium
                <ol>
                  <li>Itaque earum rerum hic tenetur a sapiente delectus</li>
                  <li>which of us ever undertakes laborious physical exercise</li>
                </ol>
              </li>
              <li>Et harum quidem rerum facilis est et expedita distinctio</li>
              <li>Itaque earum rerum hic tenetur a sapiente delectus</li>
              <li>which of us ever undertakes laborious physical exercise</li>
            </ul>
            <p>
              Experience the vibrant flavors and rich diversity of street foods as you embark on a
              culinary adventure around the globe. Whether you're wandering through bustling markets
              or exploring hidden alleyways, these must-try street foods promise to tantalize your
              taste buds and leave you craving for more.
            </p>
          </div>

          {/* navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-4 border-y border-dashed border-neutral-200">
            {/* tags */}
            <ul className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Tags size={16} /> :
              </li>
              <li>
                <Link
                  href="#"
                  className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
                >
                  review
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
                >
                  vlog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
                >
                  product
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
                >
                  lifestyle
                </Link>
              </li>
            </ul>

            {/* share */}
            <div className="flex items-center">
              <Link href="#" className="p-2 hover:opacity-80">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <Music size={20} />
              </Link>
            </div>
          </div>

          {/* profile */}
          <div className="flex flex-row items-center py-6 md:py-8 border-b border-dashed border-neutral-200">
            <div className="rounded-full overflow-hidden">
              <Link href="#">
                <img
                  src="/img/personal/avatar.jpeg"
                  alt="avatar"
                  className="size-20 rounded-full mb-2"
                />
              </Link>
            </div>
            <div className="ms-6">
              {/*name*/}
              <h4 className="text-xl">Jesicca</h4>
              {/* website */}
              <p>
                <Link
                  target="_blank"
                  className="hover:text-black"
                  rel="noopener"
                  href="https://tailwindtemplate.net"
                >
                  https://tailwindtemplate.net
                </Link>
              </p>
              {/*description*/}
              <p className="hidden sm:block">
                Programmer, Developer, I design and develop Tailwind template, founder of Tailnet
              </p>
              {/*social*/}
              <div className="mt-2">
                <ul className="space-x-3">
                  {/*facebook*/}
                  <li className="inline-block">
                    <Link
                      target="_blank"
                      className="hover:text-neutral-900"
                      rel="noopener noreferrer"
                      href="https://facebook.com"
                      title="Facebook"
                    >
                      <Facebook size={20} />
                    </Link>
                  </li>
                  {/*twitter*/}
                  <li className="inline-block">
                    <Link
                      target="_blank"
                      className="hover:text-neutral-900"
                      rel="noopener noreferrer"
                      href="https://twitter.com"
                      title="Twitter"
                    >
                      <Twitter size={20} />
                    </Link>
                  </li>
                  {/*youtube*/}
                  <li className="inline-block">
                    <Link
                      target="_blank"
                      className="hover:text-neutral-900"
                      rel="noopener noreferrer"
                      href="https://youtube.com"
                      title="Youtube"
                    >
                      <Linkedin size={20} />
                    </Link>
                  </li>
                  {/*instagram*/}
                  <li className="inline-block">
                    <Link
                      target="_blank"
                      className="hover:text-neutral-900"
                      rel="noopener noreferrer"
                      href="https://instagram.com"
                      title="Instagram"
                    >
                      <Instagram size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* related */}
          <Related />

          {/* comments */}
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
