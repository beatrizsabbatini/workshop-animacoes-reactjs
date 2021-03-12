import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

interface ParallaxWordProps {
  item: Item;
}

interface Item {
  id: number;
  name: string;
  yValues: number[];
  scale: number;
}

const ParallaxWord: React.FC<ParallaxWordProps> = ({ item, children }) => {
  const { scrollY } = useViewportScroll();
  const yPosition = useTransform(scrollY, item.yValues, [0, -600]); // (posição atual no scroll, inputRange, outputRange)
  // o valor negativo no -600, faz os itens subirem, se foose positivo (600), o efeito parallax seria pra baixo

  return (
    <motion.h1 style={{ y: yPosition }} animate={{ scale: item.scale }}>
      {children}
    </motion.h1>
  );
};

export default ParallaxWord;
