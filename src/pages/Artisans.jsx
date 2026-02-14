import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ArtisanCard from '../components/ArtisanCard';
import { Search, Filter, MapPin } from 'lucide-react';

const Artisans = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedCraft, setSelectedCraft] = useState('all');

    // Sample artisan data
    const artisans = [
        {
            id: 1,
            name: 'Lakshmi Devi',
            craft: 'Madhubani Painting',
            location: 'Bihar',
            region: 'east',
            image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop'
        },
        {
            id: 2,
            name: 'Ramesh Kumar',
            craft: 'Pottery & Terracotta',
            location: 'Rajasthan',
            region: 'west',
            image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=500&fit=crop'
        },
        {
            id: 3,
            name: 'Savita Sharma',
            craft: 'Handloom Weaving',
            location: 'Gujarat',
            region: 'west',
            image: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=500&h=500&fit=crop'
        },
        {
            id: 4,
            name: 'Meena Kumari',
            craft: 'Block Printing',
            location: 'Rajasthan',
            region: 'west',
            image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&h=500&fit=crop'
        },
        {
            id: 5,
            name: 'Arjun Singh',
            craft: 'Wood Carving',
            location: 'Karnataka',
            region: 'south',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
        },
        {
            id: 6,
            name: 'Radha Devi',
            craft: 'Embroidery',
            location: 'Uttar Pradesh',
            region: 'north',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop'
        }
    ];

    const regions = ['all', 'north', 'south', 'east', 'west'];
    const crafts = ['all', 'Madhubani Painting', 'Pottery & Terracotta', 'Handloom Weaving', 'Block Printing', 'Wood Carving', 'Embroidery'];

    const filteredArtisans = artisans.filter(artisan => {
        const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artisan.craft.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = selectedRegion === 'all' || artisan.region === selectedRegion;
        const matchesCraft = selectedCraft === 'all' || artisan.craft === selectedCraft;

        return matchesSearch && matchesRegion && matchesCraft;
    });

    return (
        <>
            <Helmet>
                <title>Artisans Directory - Udayan Public Empowerment Trust</title>
                <meta name="description" content="Meet the talented artisans we support. Browse profiles of skilled craftspeople preserving traditional Indian arts and crafts." />
            </Helmet>

            <div className="artisans-page">
                {/* Hero */}
                <section className="page-hero">
                    <div className="container">
                        <h1>Meet Our Artisans</h1>
                        <p>Discover the talented craftspeople keeping traditional Indian arts alive</p>
                    </div>
                </section>

                {/* Filters */}
                <section className="filters-section">
                    <div className="container">
                        <div className="filters-wrapper">
                            {/* Search */}
                            <div className="search-box">
                                <Search size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by name, craft, or location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Region Filter */}
                            <div className="filter-group">
                                <Filter size={18} />
                                <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                                    {regions.map(region => (
                                        <option key={region} value={region}>
                                            {region === 'all' ? 'All Regions' : region.charAt(0).toUpperCase() + region.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Craft Filter */}
                            <div className="filter-group">
                                <Filter size={18} />
                                <select value={selectedCraft} onChange={(e) => setSelectedCraft(e.target.value)}>
                                    <option value="all">All Crafts</option>
                                    {crafts.slice(1).map(craft => (
                                        <option key={craft} value={craft}>{craft}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <p className="results-count">
                            Showing {filteredArtisans.length} {filteredArtisans.length === 1 ? 'artisan' : 'artisans'}
                        </p>
                    </div>
                </section>

                {/* Artisans Grid */}
                <section className="artisans-grid-section">
                    <div className="container">
                        {filteredArtisans.length > 0 ? (
                            <div className="artisans-grid">
                                {filteredArtisans.map(artisan => (
                                    <ArtisanCard key={artisan.id} artisan={artisan} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <MapPin size={48} />
                                <h3>No artisans found</h3>
                                <p>Try adjusting your search or filters</p>
                            </div>
                        )}
                    </div>
                </section>
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
          grid-template-columns: 2fr 1fr 1fr;
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
          color: var(--text-main);
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
          color: var(--text-main);
          cursor: pointer;
        }

        .results-count {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .artisans-grid-section {
          padding: 4rem 0;
        }

        .artisans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .no-results {
          text-align: center;
          padding: 5rem 0;
          color: var(--text-muted);
        }

        .no-results svg {
          color: var(--border-color);
          margin-bottom: 1rem;
        }

        .no-results h3 {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        @media (max-width: 992px) {
          .filters-wrapper {
            grid-template-columns: 1fr;
          }

          .artisans-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .page-hero h1 {
            font-size: 2.5rem;
          }

          .artisans-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </>
    );
};

export default Artisans;
