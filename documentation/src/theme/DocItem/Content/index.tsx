import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type { Props } from '@theme/DocItem/Content';
// import Translate from '@docusaurus/Translate';
import {
    DraftBannerTitle,
} from '@docusaurus/theme-common';
import Admonition from '@theme/Admonition';
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle(): string | null {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

export default function DocItemContent({children}: Props): ReactNode {
    const syntheticTitle = useSyntheticTitle();
    const { frontMatter } = useDoc();

    // Define expected front-matter fields with type safety
    const { opracowanie, data_zgloszenia, wersja_robocza, ostatnia_aktualizacja, wspolpraca } = frontMatter as {
        opracowanie?: string;
        data_zgloszenia?: string;
        ostatnia_aktualizacja?: string;
        wersja_robocza?: boolean;
        wspolpraca?: string;
  
    };
    const wersja_roboczaBanner = wersja_robocza === true;
  return (
      <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
          {wersja_roboczaBanner && (


    <Admonition
      type="caution"
      title={<DraftBannerTitle />} >
                  Jest to dokument roboczy, który w dowolnym momencie może zostać zmieniony, zastąpiony lub usunięty. Nie należy korzystać z tego opracowania jako czegoś innego niż <strong>dokumentu w trakcie opracowywania</strong>.<br /> <strong>Nie wahaj się proponować zmian</strong>. Możesz komentować, uzupełniać, redagować każdy fragment dokumentu.
    </Admonition>


          )}
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
          )}
          {/* Show banner only if front-matter flag or text is present */}
          {(opracowanie || wspolpraca ) && (
              <div className="danePublikacji">
                  {/* Show 'opracowanie' with comma if it exists */}
                  {opracowanie && <>Opracowanie: {opracowanie} </>}
                  {/* Show 'wspolpraca' with comma if it exists */}
                  {wspolpraca && <>. Współpraca: {wspolpraca} </>}
                  </div>
          )}        
           {(data_zgloszenia || ostatnia_aktualizacja) && (                 
              <div className="datyPublikacji">
                  {/* Always show 'data_zgloszenia' if it exists */}
                  {data_zgloszenia && <>Data zgłoszenia: {data_zgloszenia}</>}

                  {/* Optionally show 'ostatnia_aktualizacja' */}
                  {ostatnia_aktualizacja && <>, ostatnia aktualizacja: {ostatnia_aktualizacja}</>}
              </div>
          )}


      <MDXContent>{children}</MDXContent>
    </div>
  );
}
