import Link from 'next/link';
import TheFooterDocs from '../components/TheFooterDocs';
import TheHeaderDocs from '../components/TheHeaderDocs';

const DocsLayout = ({ children }) =>
  <>
    <TheHeaderDocs />
    <main className='container mx-auto'>{children}</main>
    <TheFooterDocs />
  </>

export default DocsLayout;