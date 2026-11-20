import React from 'react';
import { Announcement } from '../components/home/Announcement';
import { Navigation } from '../components/home/Navigation';
import { Hero } from '../components/home/Hero';
import { PlayPromise } from '../components/home/PlayPromise';
import { ShopByAge } from '../components/home/ShopByAge';
import { Bestsellers } from '../components/home/Bestsellers';
import { GiftFinder } from '../components/home/GiftFinder';
import { Newsletter } from '../components/home/Newsletter';
import { Footer } from '../components/home/Footer';
import '../styles/home.css';

export function HomePage() {
  return (
    <div className="home-page">
      <Announcement />
      <Navigation />
      <Hero />
      <PlayPromise />
      <ShopByAge />
      <Bestsellers />
      <GiftFinder />
      <Newsletter />
      <Footer />
    </div>
  );
}
