
'use client';

import { useEffect, useState } from 'react';
import { firstNames, lastNames, cities } from '@/lib/content';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

type Notification = {
  name: string;
  location: string;
};

export function SalesNotification() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getRandomItem = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generateRandomNotification = () => {
    const firstName = getRandomItem(firstNames);
    const lastName = getRandomItem(lastNames);
    const city = getRandomItem(cities);
    return {
      name: `${firstName} ${lastName[0]}.`,
      location: `${city.city}, ${city.state}`,
    };
  };

  useEffect(() => {
    const showNotification = () => {
      setNotification(generateRandomNotification());
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Hide after 3 seconds
    };

    // Show first notification after a short delay
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then, set an interval for subsequent notifications
    const interval = setInterval(showNotification, 30000); // Show every 30 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 z-50 w-full max-w-xs rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-500',
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShoppingCart className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-foreground">
              Alguém acabou de comprar!
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {notification.name} de {notification.location} comprou o Plano Completo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
