import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    {
      id: 1,
      title: "Counter-Strike 2",
      description: "Wallhack, Aimbot, ESP, Triggerbot",
      status: "Активен",
      price: "Бесплатно",
      downloads: "15.2K",
      rating: 4.8,
      features: ["Wallhack", "Aimbot", "ESP", "Triggerbot", "Bunny Hop"]
    },
    {
      id: 2,
      title: "Valorant",
      description: "Undetected aimbot, ESP, Radar hack",
      status: "Обновлен",
      price: "499₽",
      downloads: "8.9K",
      rating: 4.6,
      features: ["Aimbot", "ESP", "Radar", "Recoil Control", "Glow ESP"]
    },
    {
      id: 3,
      title: "Apex Legends",
      description: "Aimbot, ESP, Speed hack, No recoil",
      status: "Активен",
      price: "299₽",
      downloads: "12.1K",
      rating: 4.7,
      features: ["Aimbot", "ESP", "Speed Hack", "No Recoil", "Third Person"]
    },
    {
      id: 4,
      title: "Call of Duty",
      description: "Aimbot, Wallhack, Unlimited ammo",
      status: "Бета",
      price: "799₽",
      downloads: "6.3K",
      rating: 4.5,
      features: ["Aimbot", "Wallhack", "Unlimited Ammo", "God Mode", "Fly Hack"]
    },
    {
      id: 5,
      title: "Rust",
      description: "ESP, Aimbot, No recoil, Speed hack",
      status: "Активен",
      price: "399₽",
      downloads: "9.7K",
      rating: 4.4,
      features: ["ESP", "Aimbot", "No Recoil", "Speed Hack", "Item ESP"]
    },
    {
      id: 6,
      title: "Fortnite",
      description: "Aimbot, ESP, Building hack",
      status: "Активен",
      price: "599₽",
      downloads: "11.4K",
      rating: 4.9,
      features: ["Aimbot", "ESP", "Building Hack", "Storm Predictor", "Loot ESP"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активен": return "bg-neon-green text-black";
      case "Обновлен": return "bg-neon-pink text-white";
      case "Бета": return "bg-yellow-500 text-black";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/img/8cef8c8e-b074-4c7a-9f4a-5bf56ad2882a.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-7xl font-heading font-bold mb-6 text-white">
            GAMING
            <span className="text-neon-green ml-4">CHEATS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-body">
            Премиум читы для популярных игр. Undetected. Постоянные обновления. 
            <br />
            Поднимись на новый уровень игры.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon-green text-black hover:bg-neon-green/80 font-semibold px-8 py-6 text-lg font-heading"
            >
              <Icon name="Download" size={20} className="mr-2" />
              СКАЧАТЬ ЧИТЫ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-semibold px-8 py-6 text-lg font-heading"
            >
              <Icon name="Play" size={20} className="mr-2" />
              СМОТРЕТЬ ДЕМО
            </Button>
          </div>
          
          <div className="flex justify-center gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-green font-heading">50K+</div>
              <div className="text-gray-400 font-body">Активных пользователей</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink font-heading">99.8%</div>
              <div className="text-gray-400 font-body">Undetected rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-green font-heading">24/7</div>
              <div className="text-gray-400 font-body">Поддержка</div>
            </div>
          </div>
        </div>
      </div>

      {/* Games Catalog */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold text-white mb-4">
              КАТАЛОГ <span className="text-neon-green">ЧИТОВ</span>
            </h2>
            <p className="text-xl text-gray-400 font-body">
              Выбери свою игру и получи преимущество
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <Card key={game.id} className="bg-dark-card border-dark-border hover:border-neon-green transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white font-heading text-xl group-hover:text-neon-green transition-colors">
                      {game.title}
                    </CardTitle>
                    <Badge className={getStatusColor(game.status)}>
                      {game.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400 font-body">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {game.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="outline" className="border-neon-pink/30 text-neon-pink">
                          {feature}
                        </Badge>
                      ))}
                      {game.features.length > 3 && (
                        <Badge variant="outline" className="border-gray-600 text-gray-400">
                          +{game.features.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-sm text-gray-400 font-body">
                      <div className="flex items-center gap-1">
                        <Icon name="Download" size={16} />
                        {game.downloads}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500" />
                        {game.rating}
                      </div>
                    </div>

                    {/* Price and Download */}
                    <div className="flex justify-between items-center pt-4 border-t border-dark-border">
                      <div className="text-2xl font-bold text-neon-green font-heading">
                        {game.price}
                      </div>
                      <Button 
                        className="bg-neon-green text-black hover:bg-neon-green/80 font-semibold font-heading"
                      >
                        <Icon name="Download" size={16} className="mr-2" />
                        СКАЧАТЬ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-dark-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              ПОЧЕМУ ВЫБИРАЮТ <span className="text-neon-pink">НАС?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">UNDETECTED</h3>
              <p className="text-gray-400 font-body">99.8% защита от античитов. Постоянные обновления защиты.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">БЫСТРО</h3>
              <p className="text-gray-400 font-body">Мгновенная загрузка и установка. Никаких тормозов в игре.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">СООБЩЕСТВО</h3>
              <p className="text-gray-400 font-body">50K+ активных пользователей. Поддержка 24/7 в Telegram.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;