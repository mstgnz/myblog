import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Hakkımızda</h1>
        <p className="text-muted-foreground">
          Modern web teknolojileri hakkında içerikler üreten bir blog.
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Misyonumuz</h2>
            <p className="text-muted-foreground">
              Web geliştirme dünyasındaki en son teknolojileri ve en iyi uygulamaları paylaşarak,
              geliştiricilerin daha iyi uygulamalar oluşturmasına yardımcı olmak.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Vizyonumuz</h2>
            <p className="text-muted-foreground">
              Türkiye'nin en kapsamlı ve güncel web geliştirme kaynaklarını sunan platform olmak.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Değerlerimiz</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Kaliteli ve güncel içerik</li>
              <li>Açık kaynak kültürünü desteklemek</li>
              <li>Topluluk odaklı yaklaşım</li>
              <li>Sürekli öğrenme ve gelişim</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Katkıda Bulunun</h2>
            <p className="text-muted-foreground">
              Siz de blog yazılarınızla katkıda bulunabilir, deneyimlerinizi paylaşabilirsiniz.
              Bunun için iletişim sayfasından bize ulaşın.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 