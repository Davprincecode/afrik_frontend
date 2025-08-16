import React, { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';


interface Props {
  src: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ImagePreviewModal: React.FC<Props> = ({
  src,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasPrev, hasNext]);

  return (
    <div className="modalOverlay">
      <div className="modalContent">

        <div className="closeBtn" onClick={onClose}>
          <RxCross1 />
        </div>

        <div className="navBtnFlex">
            {hasPrev && (
                    <div className="navBtn left" onClick={onPrev}>
                        <IoIosArrowBack />
                    </div>
                    )}

            {hasNext && (
            <div className="navBtn right" onClick={onNext}>
                <IoIosArrowForward />
            </div>
            )}
        </div>
     

        <div className="prevImg">
            <img src={src} className="previewImage" />
        </div>
        
        

      </div>
    </div>
  );
};

export default ImagePreviewModal;
