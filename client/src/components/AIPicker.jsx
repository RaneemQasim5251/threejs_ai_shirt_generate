import React from 'react';
import { useSnapshot } from 'valtio';
import CustomButton from './CustomButton';
import state from '../store';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  const snap = useSnapshot(state); // Accessing state to get the language

  return (
    <div className="aipicker-container">
      <textarea 
        placeholder={
          snap.language === 'EN' ? "Ask AI..." : 
          snap.language === 'AR' ? "اطلب من الذكاء الاصطناعي توليد القماش أو الشعار الذي تريد..." : 
          snap.language === 'FR' ? "Demander à l'IA..." : 
          snap.language === 'JP' ? "AIに頼む..." : 
          "Спросите AI..."
        }
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title={
              snap.language === 'EN' ? "Asking AI..." : 
              snap.language === 'AR' ? "اطلب من الذكاء الاصطناعي توليد لون وخامة القماش أو الشعار الذي تريد..." : 
              snap.language === 'FR' ? "Demande à l'IA..." : 
              snap.language === 'JP' ? "AIに頼んでいます..." : 
              "Запрос AI..."
            }
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title={
                snap.language === 'EN' ? "AI Logo" : 
                snap.language === 'AR' ? "شعار بالمنتصف" : 
                snap.language === 'FR' ? "Logo IA" : 
                snap.language === 'JP' ? "AIロゴ" : 
                "Логотип AI"
              }
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title={
                snap.language === 'EN' ? "AI Full" : 
                snap.language === 'AR' ? "كامل القطعة" : 
                snap.language === 'FR' ? "Complet IA" : 
                snap.language === 'JP' ? "AIフル" : 
                "Полный AI"
              }
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker;
