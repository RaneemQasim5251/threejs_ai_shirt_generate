import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")} className="flex justify-between items-center">
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />

            {/* Language Drop-down Menu */}
            <div className="relative inline-block text-left ml-auto">
              <button
                onClick={() => state.isOpen = !state.isOpen}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                {snap.language === 'EN' ? 'English' : snap.language === 'AR' ? 'عربي' : snap.language === 'FR' ? 'Français' : snap.language === 'JP' ? '日本語' : 'Русский'}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {snap.isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => state.language = 'EN'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      English
                    </button>
                    <button
                      onClick={() => state.language = 'AR'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      عربي
                    </button>
                    <button
                      onClick={() => state.language = 'FR'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      Français
                    </button>
                    <button
                      onClick={() => state.language = 'JP'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      日本語
                    </button>
                    <button
                      onClick={() => state.language = 'RU'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      Русский
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className={`head-text ${['FR', 'JP', 'RU'].includes(snap.language) ? snap.language.toLowerCase() : 'default'}`}>
                {snap.language === 'EN' ? "LET'S" : snap.language === 'AR' ? "جاهز؟" : snap.language === 'FR' ? "ALLONS-Y" : snap.language === 'JP' ? "やろう" : "ДАВАЙ"}
                <br className="xl:block hidden" /> 
                {snap.language === 'EN' ? "DO IT." : snap.language === 'AR' ? "" : snap.language === 'FR' ? "FAIS-LE." : snap.language === 'JP' ? "それを行う" : "СДЕЛАЙ ЭТО."}
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                {snap.language === 'EN'
                  ? "Create your unique and exclusive shirt with our brand-new 3D customization tool. Unleash your imagination and define your own style."
                  : snap.language === 'AR'
                  ? "أنشئ قميصك الفريد على ذوقك باستخدام أداة التخصيص ثلاثية الأبعاد الجديدة المدمجة مع الذكاء الاصطناعي، أطلق العنان لخيالك وحدد أسلوبك الخاص"
                  : snap.language === 'FR'
                  ? "Créez votre chemise unique et exclusive avec notre tout nouvel outil de personnalisation 3D. Libérez votre imagination et définissez votre propre style."
                  : snap.language === 'JP'
                  ? "新しい3Dカスタマイズツールで、ユニークで独自のシャツを作成します。 想像力を解き放ち、独自のスタイルを定義します。"
                  : "Создайте свою уникальную и эксклюзивную рубашку с нашим новым инструментом 3D-кастомизации. Освободите свое воображение и определите свой собственный стиль."}
              </p>

              <CustomButton 
                type="filled"
                title={snap.language === 'EN' ? "Customize It" : snap.language === 'AR' ? "أنا دايما جاهز" : snap.language === 'FR' ? "Personnalisez-le" : snap.language === 'JP' ? "カスタマイズする" : "Настроить"}
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home;
