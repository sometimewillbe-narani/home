/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Services from './pages/Services';
import Features from './pages/Features';
import Guide from './pages/Guide';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brand" element={<Brand />} />
          <Route path="services" element={<Services />} />
          <Route path="guide" element={<Guide />} />
          <Route path="features" element={<Features />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
