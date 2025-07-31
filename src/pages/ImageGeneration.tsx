import { useState } from "react";
import ImageGenerator from "@/components/ImageGenerator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ImageGeneration = () => {
  const [generatedImages, setGeneratedImages] = useState<Array<{url: string, name: string}>>([]);

  const handleImageGenerated = async (imageUrl: string, imageName: string) => {
    setGeneratedImages(prev => [...prev, { url: imageUrl, name: imageName }]);
    
    // Загружаем изображение в проект
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], imageName, { type: 'image/webp' });
      
      // Здесь бы можно было сохранить файл в assets, но для демонстрации просто показываем URL
      console.log(`Изображение ${imageName} готово:`, imageUrl);
    } catch (error) {
      console.error("Ошибка загрузки изображения:", error);
    }
  };

  const downloadImage = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success(`Изображение ${filename} загружено`);
    } catch (error) {
      toast.error("Ошибка загрузки изображения");
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Генерация реалистичных изображений</h1>
          <p className="text-muted-foreground">
            Создание более естественных фотографий систем видеонаблюдения для портфолио
          </p>
        </div>

        <ImageGenerator onImageGenerated={handleImageGenerated} />

        {generatedImages.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Сгенерированные изображения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{image.name}</h3>
                    <Button 
                      onClick={() => downloadImage(image.url, image.name)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Скачать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGeneration;