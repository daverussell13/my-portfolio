"use client";

import LiteYouTubeEmbed, { LiteYouTube } from "react-lite-youtube-embed";

export interface YouTubeEmbedProps extends LiteYouTube {
  className?: string;
}

const YouTubeEmbed = ({ className, ...props }: YouTubeEmbedProps) => (
  <figure className={className}>
    <LiteYouTubeEmbed {...props} />
  </figure>
);

export default YouTubeEmbed;
