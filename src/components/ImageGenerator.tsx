import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { RunwareService, GenerateImageParams } from "@/services/runware";

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string, imageName: string) => void;
}

const ImageGenerator = ({ onImageGenerated }: ImageGeneratorProps) => {
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [runwareService, setRunwareService] = useState<RunwareService | null>(null);

  const initializeService = () => {
    if (!apiKey.trim()) {
      toast.error("Пожалуйста, введите API ключ Runware");
      return;
    }
    
    const service = new RunwareService(apiKey);
    setRunwareService(service);
    toast.success("Сервис Runware инициализирован");
  };

  const generateRealisticImages = async () => {
    if (!runwareService) {
      toast.error("Сначала инициализируйте сервис с API ключом");
      return;
    }

    setIsGenerating(true);

    const imagePrompts = [
      {
        prompt: "Real photograph of CCTV security cameras mounted inside a modern residential house, natural lighting, authentic home interior, professional security installation, realistic photo quality, shot with DSLR camera",
        filename: "residential-surveillance.jpg"
      },
      {
        prompt: "Real photograph of professional surveillance cameras installed in a commercial shopping center, natural lighting, authentic retail environment, security monitoring system, realistic photo quality, shot with professional camera",
        filename: "commercial-surveillance.jpg"
      },
      {
        prompt: "Real photograph of industrial warehouse with security cameras on high walls, natural industrial lighting, authentic warehouse environment, professional CCTV installation, realistic photo quality, documentary style",
        filename: "warehouse-surveillance.jpg"
      },
      {
        prompt: "Real photograph of modern office building with security cameras, natural office lighting, authentic business environment, professional surveillance equipment, realistic photo quality, architectural photography",
        filename: "office-surveillance.jpg"
      },
      {
        prompt: "Real photograph of security cameras at upscale residential cottage community, natural daylight, authentic suburban setting, professional security installation, realistic photo quality, real estate photography style",
        filename: "cottage-surveillance.jpg"
      },
      {
        prompt: "Real photograph of retail store with CCTV cameras monitoring shopping area, natural store lighting, authentic retail environment, professional security system, realistic photo quality, commercial photography",
        filename: "retail-surveillance.jpg"
      }
    ];

    try {
      for (const imageData of imagePrompts) {
        const params: GenerateImageParams = {
          positivePrompt: imageData.prompt,
          model: "runware:100@1",
          numberResults: 1,
          outputFormat: "WEBP",
          CFGScale: 7,
          scheduler: "FlowMatchEulerDiscreteScheduler",
          strength: 0.9
        };

        const result = await runwareService.generateImage(params);
        
        if (result.imageURL) {
          onImageGenerated(result.imageURL, imageData.filename);
          toast.success(`Изображение ${imageData.filename} сгенерировано`);
        }
      }
      
      toast.success("Все реалистичные изображения успешно сгенерированы!");
    } catch (error) {
      console.error("Ошибка генерации:", error);
      toast.error("Ошибка при генерации изображений");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Генератор реалистичных изображений</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Для генерации более реалистичных фотографий видеонаблюдения введите ваш API ключ Runware.
            Получить ключ можно на{" "}
            <a 
              href="https://runware.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://runware.ai/
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="apiKey">Runware API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Введите ваш API ключ Runware"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={initializeService}
              variant="outline"
              disabled={!apiKey.trim()}
            >
              Инициализировать сервис
            </Button>
            
            <Button 
              onClick={generateRealisticImages}
              disabled={!runwareService || isGenerating}
              className="flex-1"
            >
              {isGenerating ? "Генерируем изображения..." : "Сгенерировать реалистичные фото"}
            </Button>
          </div>
        </div>

        {isGenerating && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Генерируем 6 реалистичных изображений систем видеонаблюдения...
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageGenerator;