/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface PlacatechLogoProps {
  mode?: 'full' | 'mark' | 'horizontal';
  className?: string;
  iconSize?: number;
  textColor?: string;
}

export const PlacatechLogo: React.FC<PlacatechLogoProps> = ({
  className = '',
}) => {
  const logoUrl = 'https://i.ibb.co/W4hbtCPw/Logo-placatech.png';

  return (
    <div className={`w-full flex justify-center items-center ${className}`} id="placatech-logo-container">
      <img 
        src={logoUrl} 
        alt="PLACATECH" 
        referrerPolicy="no-referrer"
        className="w-full h-auto max-h-[140px] sm:max-h-[220px] md:max-h-[280px] lg:max-h-[340px] object-contain transition-transform duration-300 hover:scale-[1.005]"
        id="placatech-img-logo"
      />
    </div>
  );
};
