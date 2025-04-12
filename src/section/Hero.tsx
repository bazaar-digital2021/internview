'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent, useInView } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateTranslate = (x: number, y: number, strength: number) => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const moveX = (x - windowWidth / 2) * strength;
      const moveY = (y - windowHeight / 2) * strength;
      return { moveX, moveY };
    }
    return { moveX: 0, moveY: 0 };
  };

  // Mouse-based parallax for blob movement
  const blobOneMovement = calculateTranslate(mousePosition.x, mousePosition.y, 0.02);
  const blobTwoMovement = calculateTranslate(mousePosition.x, mousePosition.y, -0.01);
  const blobThreeMovement = calculateTranslate(mousePosition.x, mousePosition.y, 0.015);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(27, 51, 95, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const imageContainerVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      filter: "brightness(1.1)",
      transition: { duration: 0.4 }
    }
  };

  return (
    <section ref={ref} className='relative w-full overflow-hidden min-h-[100vh] flex items-center'>
      {/* Dynamic gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: isHovered
            ? "linear-gradient(135deg, #1b335f 0%, #264173 50%, #3660a3 100%)"
            : "linear-gradient(135deg, #1b335f 0%, #3660a3 60%, #4b75b8 100%)"
        }}
        transition={{ duration: 1.5 }}
      />

      {/* Interactive floating blobs with mouse parallax */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0"
        style={{ opacity }}
      >
        <motion.div
          className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-white/20 blur-[80px]"
          animate={{
            x: blobOneMovement.moveX,
            y: blobOneMovement.moveY,
          }}
          transition={{ type: "spring", stiffness: 10, damping: 30 }}
        />
        <motion.div
          className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full bg-cyan-300/10 blur-[60px]"
          animate={{
            x: blobTwoMovement.moveX,
            y: blobTwoMovement.moveY,
          }}
          transition={{ type: "spring", stiffness: 5, damping: 20 }}
        />
        <motion.div
          className="absolute -bottom-48 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-300/10 blur-[70px]"
          animate={{
            x: blobThreeMovement.moveX,
            y: blobThreeMovement.moveY,
          }}
          transition={{ type: "spring", stiffness: 8, damping: 25 }}
        />
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-1 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 1.5, 1, 0],
              opacity: [0, 1, 1, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 relative z-10'>
        {/* LEFT SIDE - Content */}
        <motion.div
          className='flex flex-col gap-6 lg:min-w-[60%] w-full px-6 md:px-10 relative'
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ y: y1 }}
        >
          {/* Decorative line */}
          <motion.div
            className="absolute -left-2 top-0 w-1 h-32 bg-gradient-to-b from-white/0 via-white/80 to-white/0"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 150, opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 1 }}
          />

          <motion.h1
            className='text-5xl font-bold text-white md:text-6xl lg:text-7xl leading-tight'
            variants={itemVariants}
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          >
            From campus to career <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              we bridge the gap
            </motion.span>
          </motion.h1>

          <motion.p
            className='text-lg text-white/90 max-w-xl'
            variants={itemVariants}
            style={{ textShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
          >
            Empowering students with real-world skills, mentorship, and expert-led training to thrive in today's job market.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Button
              variant='default'
              className='bg-white text-[#1b335f] p-6 rounded-full text-lg font-semibold shadow-lg relative group overflow-hidden w-max hover:text-white'
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white z-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
              <motion.div
                className="absolute -right-2 -top-2 w-8 h-8 bg-cyan-200 rounded-full opacity-60 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </Button>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -bottom-16 left-10 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
          >
            <motion.p
              className="text-sm text-white/90 flex items-center gap-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
              500+ Students Placed
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute -right-10 top-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hidden md:block"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
          >
            <motion.p
              className="text-xs text-white/90"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="font-semibold">4.9</span> ★★★★★
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Image */}
        <motion.div
          className='relative lg:block w-full h-[70vh] hidden'
          variants={imageContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ y: y2 }}
        >
          <motion.div
            className='absolute top-[65%] transform -translate-y-1/2 -right-20 rounded-tl-[170px] overflow-hidden shadow-2xl'
            whileHover="hover"
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-[#1b335f]/30 to-transparent z-10"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                background: [
                  'linear-gradient(to tr, rgba(27, 51, 95, 0.3), transparent)',
                  'linear-gradient(to tr, rgba(54, 96, 163, 0.3), transparent)',
                  'linear-gradient(to tr, rgba(27, 51, 95, 0.3), transparent)'
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Image with animation */}
            <motion.div variants={imageVariants}>
              <Image
                src='/hero-img2.webp'
                alt='hero image'
                height={500}
                width={500}
                className='object-cover'
                priority
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-white/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-white/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2"
          animate={{ boxShadow: ['0px 0px 0px rgba(255,255,255,0.2)', '0px 0px 8px rgba(255,255,255,0.5)', '0px 0px 0px rgba(255,255,255,0.2)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
