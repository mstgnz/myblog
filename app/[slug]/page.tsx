import React from 'react';
import Link from 'next/link';
import Related from '@/components/related';
import Comment from '@/components/comment';

export async function generateStaticParams() {
  return [];
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
    <div className="container xl:max-w-6xl mx-auto px-4 flex flex-col gap-4 lg:gap-6">
      {/* layout */}
      <div className="grid grid-cols-1 py-6">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl lg:text-4xl md:text-center font-medium py-4">
            Top 10 Must-Try Street Foods Around The World
          </h1>
          {/* data */}
          <div className="pb-4 w-full flex items-center md:justify-center gap-4 text-sm text-neutral-500 border-b border-dashed border-neutral-200">
            {/*author*/}
            <Link
              href="#"
              rel="author"
              className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
            >
              <i className="bi bi-person me-2"></i>
              <span>by aribudin</span>
            </Link>
            {/*date*/}
            <time className="news-date" dateTime="2024-06-16">
              <i className="bi bi-calendar me-2"></i>
              <span>May 11, 2024</span>
            </time>
            {/*category*/}
            <Link
              href="#"
              rel="category"
              className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
            >
              <i className="bi bi-bookmark me-2"></i>
              <span>Lifestyle</span>
            </Link>
          </div>

          {/* post */}
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

            <blockquote>
              <span className="absolute opacity-80 w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-500"
                  viewBox="0 0 270.000000 270.000000"
                >
                  <g
                    transform="translate(0.000000,270.000000) scale(0.100000,-0.100000)"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M920 2182 c-290 -124 -482 -341 -540 -610 -30 -140 -40 -296 -40 -644 l0 -328 370 0 370 0 0 370 0 370 -181 0 -181 0 7 63 c26 243 129 387 342 477 35 15 66 29 69 32 7 7 -132 298 -143 298 -4 0 -37 -13 -73 -28z"></path>
                    <path d="M2179 2186 c-249 -103 -442 -295 -520 -516 -50 -142 -61 -247 -66 -677 l-5 -393 371 0 371 0 0 370 0 370 -181 0 -181 0 7 53 c21 170 67 281 150 363 51 49 143 107 215 134 19 7 39 17 44 21 10 9 -124 298 -139 298 -5 0 -35 -10 -66 -23z"></path>
                  </g>
                </svg>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
              </p>
              <footer>
                Quote by <cite title="Source Title">Jesicca</cite>
              </footer>
            </blockquote>

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
                <i className="bi bi-tags"></i> :
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
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link href="#" className="p-2 hover:opacity-80">
                <i className="bi bi-tiktok"></i>
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
                      <i className="bi bi-facebook text-xl"></i>
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
                      <i className="bi bi-twitter text-xl"></i>
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
                      <i className="bi bi-linkedin text-xl"></i>
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
                      <i className="bi bi-tiktok text-xl"></i>
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
