

import Card from "@/components/Card";
import Hero from "@/components/hero";
import { db } from "@/lib/prisma";

export default async function Home() {


  // delete in correct order to avoid FK constraint errors

const category =   await db.category.findMany();
console.log(category);


  return (
    <main>
      <Hero />
      <Card />
    </main>
  );
}
