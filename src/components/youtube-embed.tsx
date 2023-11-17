import React from 'react';

interface Props {
  youtubeUrl: string;
}

export const YoutubeEmbed: React.FC<Props> = ({ youtubeUrl }) => {
  return (
    <div className='w-full'>
      <iframe
        className='w-full'
        height="600"
        src={`https://www.youtube.com/embed/${youtubeUrl.split('v=').pop()}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}
