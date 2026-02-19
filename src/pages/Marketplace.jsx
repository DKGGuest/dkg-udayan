import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import EnquiryModal from '../components/EnquiryModal';
import { Search, Filter, Grid, List } from 'lucide-react';

import { products } from '../data/products';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openInquiry = (product) => {
    setSelectedProduct(product);
  };

  const closeInquiry = () => {
    setSelectedProduct(null);
  };

  const categories = ['all', 'Paintings', 'Pottery', 'Textiles', 'Wood Craft', 'Jewelry'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Marketplace - Udayan Public Empowerment Trust</title>
        <meta name="description" content="Explore handcrafted products from rural artisans. Each purchase supports traditional crafts and empowers communities." />
      </Helmet>

      <div className="marketplace-page">
        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <h1>Craft Marketplace</h1>
            <p>Discover authentic handcrafted products. Each inquiry supports artisan livelihoods.</p>
          </div>
        </section>

        {/* Filters */}
        <section className="filters-section">
          <div className="container">
            <div className="filters-wrapper">
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search products or artisans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="filter-group">
                <Filter size={18} />
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="view-toggle">
                <button
                  className={viewMode === 'grid' ? 'active' : ''}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button
                  className={viewMode === 'list' ? 'active' : ''}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            <p className="results-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-section">
          <div className="container">
            <div className={`products-grid ${viewMode}`}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onInquiry={openInquiry}
                />
              ))}
            </div>
          </div>
        </section>

        <EnquiryModal
          isOpen={!!selectedProduct}
          onClose={closeInquiry}
          title="Product Enquiry"
          formType="enquiry"
          productName={selectedProduct?.name}
        />
      </div>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          padding: 8rem 0 5rem;
          text-align: center;
          color: white;
          margin-top: 5rem;
        }

        .page-hero h1 {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
        }

        .page-hero p {
          font-size: 1.2rem;
          opacity: 0.95;
        }

        .filters-section {
          padding: 3rem 0 2rem;
          background: white;
          border-bottom: 1px solid var(--border-color);
        }

        .filters-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr auto;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--bg-warm);
          padding: 0.8rem 1.2rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .search-box input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 0.95rem;
          outline: none;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--bg-warm);
          padding: 0.8rem 1.2rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .filter-group select {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 0.95rem;
          outline: none;
          cursor: pointer;
        }

        .view-toggle {
          display: flex;
          gap: 0.5rem;
          background: var(--bg-warm);
          padding: 0.5rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .view-toggle button {
          padding: 0.5rem;
          background: transparent;
          color: var(--text-muted);
          border-radius: 4px;
          transition: var(--transition);
        }

        .view-toggle button.active {
          background: var(--primary);
          color: white;
        }

        .results-count {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .products-section {
          padding: 4rem 0;
        }

        .products-grid.grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .products-grid.list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        @media (max-width: 992px) {
          .filters-wrapper {
            grid-template-columns: 1fr;
          }

          .products-grid.grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .page-hero h1 {
            font-size: 2.5rem;
          }

          .products-grid.grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Marketplace;
