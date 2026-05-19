// Catalogue de 100 produits pour chez.deutch
// Images sélectionnées pour leur haute qualité et leur pertinence

const CATEGORY_IMAGES = {
  'Spécialités Braisées': ['https://images.unsplash.com/photo-1544025162-d76694265947','https://images.unsplash.com/photo-1555939594-58d7cb561ad1','https://images.unsplash.com/photo-1604329760661-e71dc83f8f26'],
  'Cuisine Internationale': ['https://images.unsplash.com/photo-1513104890138-7c749659a591','https://images.unsplash.com/photo-1512058564366-18510be2db19','https://images.unsplash.com/photo-1534422298391-e4f8c170db0f'],
  'Cocktails & Boissons': ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b','https://images.unsplash.com/photo-1536935338213-d2c20e9fe9d6','https://images.unsplash.com/photo-1497515114629-f71d768fd07c'],
  'Entrées & Tapas': ['https://images.unsplash.com/photo-1541014741259-df549fa9ba6f','https://images.unsplash.com/photo-1563379926898-05f4575a45d8','https://images.unsplash.com/photo-1574484284002-952d92456975']
};

const DISH_NAMES = {
  'Spécialités Braisées': ['Poulet Braisé Maison', 'Poisson Braisé du Jour', 'Saucisses Grillées', 'Brochettes de Bœuf', 'Ailes de Poulet BBQ', 'Porc Braisé'],
  'Cuisine Internationale': ['Pizza Margherita', 'Pizza Chez Deutch', 'Riz Sauté Spécial', 'Spaghetti Bolognaise', 'Burger Gourmet', 'Frites de Plantain & Poulet'],
  'Cocktails & Boissons': ['Mojito Classique', 'Cocktail Maison Deutch', 'Bière Locale Fraîche', 'Jus de Bissap Glacé', 'Whisky Premium', 'Vin Rouge Sélection'],
  'Entrées & Tapas': ['Accras de Morue', 'Nems au Poulet', 'Salade de Saison', 'Planche de Charcuterie', 'Samoussas Bœuf', 'Pilons de Poulet Croustillants']
};
const sectorKeys = Object.keys(DISH_NAMES);

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i++) {
    const sector = sectorKeys[i % sectorKeys.length];
    const names = DISH_NAMES[sector];
    const images = CATEGORY_IMAGES[sector];
    const dishBaseName = names[i % names.length];
    const imageUrl = images[i % images.length];
    const productName = `${dishBaseName} ${i > names.length ? '#' + i : ''}`.trim();

    products.push({
      id: `prod-${i}`,
      name: productName,
      description: `Découvrez notre ${dishBaseName}, une spécialité de la catégorie ${sector} proposée par chez.deutch. Excellence culinaire garantie.`,
      price: 2500 + (Math.floor(Math.random() * 15) * 500),
      category: sector,
      imageUrl: `${imageUrl}?auto=format&fit=crop&q=80&w=800`,
      stock: Math.floor(Math.random() * 50) + 10,
      featured: i % 8 === 0
    });
  }
  return products;
};

export const MOCK_PRODUCTS = generateProducts();
export const CATEGORIES = sectorKeys;

export const MOCK_DELIVERERS = [
  { id: 'dev-1', name: 'Abdoulaye', phone: '+237 670 00 00 01', zone: 'Douala (Akwa/Deido)' },
  { id: 'dev-2', name: 'Samuel', phone: '+237 690 00 00 02', zone: 'Yaoundé (Bastos/Mvan)' },
  { id: 'dev-3', name: 'Christian', phone: '+237 650 00 00 03', zone: 'Douala (Bonapriso/Logbessou)' }
];

export const MOCK_USERS_LIST = [
  { id: 'u1', name: 'Jean Dupont', email: 'jean.dupont@email.com', role: 'user', status: 'Actif', joinDate: '12/01/2026' },
  { id: 'u2', name: 'Marie Sissoko', email: 'marie.s@email.com', role: 'user', status: 'Actif', joinDate: '15/01/2026' },
  { id: 'u3', name: 'Aubry Admin', email: 'admin@assequip.cm', role: 'admin', status: 'Actif', joinDate: '01/01/2026' },
  { id: 'u4', name: 'Alain Kotto', email: 'alain.k@email.com', role: 'user', status: 'Inactif', joinDate: '20/01/2026' },
  { id: 'u5', name: 'Inès Kamga', email: 'ines.k@email.com', role: 'user', status: 'Actif', joinDate: '02/02/2026' },
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-2026-001',
    customer: 'Jean Dupont',
    date: '2026-02-04',
    total: 450000,
    status: 'En préparation',
    items: [{ name: 'Prestation Traiteur Prestige', quantity: 1, price: 450000 }]
  },
  {
    id: 'ORD-2026-002',
    customer: 'Marie Sissoko',
    date: '2026-02-03',
    total: 125000,
    status: 'Livré',
    items: [{ name: 'Menu Dégustation Signature', quantity: 1, price: 125000 }]
  }
];
