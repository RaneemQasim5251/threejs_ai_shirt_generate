import React from 'react';
import { useSnapshot } from 'valtio';
import CustomButton from './CustomButton';
import state from '../store';

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state); // Accessing state using snapshot

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          {snap.language === 'EN' ? "Upload File" : snap.language === 'AR' ? "رفع ملف" : snap.language === 'FR' ? "Télécharger un fichier" : snap.language === 'JP' ? "ファイルをアップロード" : "Загрузить файл"}
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? (snap.language === 'EN' ? "No file selected" : snap.language === 'AR' ? "لم يتم اختيار ملف" : snap.language === 'FR' ? "Aucun fichier sélectionné" : snap.language === 'JP' ? "ファイルが選択されていません" : "Файл не выбран") : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title={snap.language === 'EN' ? "Logo" : snap.language === 'AR' ? "شعار بالمنتصف" : snap.language === 'FR' ? "Logo" : snap.language === 'JP' ? "ロゴ" : "Логотип"}
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title={snap.language === 'EN' ? "Full" : snap.language === 'AR' ? "كامل القطعة" : snap.language === 'FR' ? "Complet" : snap.language === 'JP' ? "フル" : "Полный"}
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
}

export default FilePicker;
