import React, { useState } from 'react';
import GlobalNav from './components/GlobalNav';
import HeroSection from './components/HeroSection';
import AtelierSection from './components/AtelierSection';
import ReadyToWear from './components/ReadyToWear';
import CampaignVideo from './components/CampaignVideo';
import LookbookGallery from './components/LookbookGallery';
import CollectionGrid from './components/CollectionGrid';
import Newsletter from './components/Newsletter';
import Loader from './components/Loader';
import ProductDrawer from './components/ProductDrawer';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';
import CustomCursor from './components/CustomCursor';
import GlobalFooter from './components/GlobalFooter';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <ProductDrawer product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
      {isCartOpen && <CartDrawer onClose={() => setIsCartOpen(false)} />}
      
      <GlobalNav onOpenSearch={() => setIsSearchOpen(true)} onOpenCart={() => setIsCartOpen(true)} />
      <div className={isLoaded ? 'app-content ready' : 'app-content'}>
        <main>
          <HeroSection />
          <AtelierSection />
          <ReadyToWear onSelectProduct={setSelectedProduct} />
          <CampaignVideo />
          {/* <LookbookGallery /> */}
          <CollectionGrid onSelectProduct={setSelectedProduct} />
          <Newsletter />
        </main>
        <GlobalFooter />
      </div>
    </>
  );
}

export default App;
