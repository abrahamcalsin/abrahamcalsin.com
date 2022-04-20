import { Meta } from '~/components/meta'
import { TitleSection } from '~/components/title-section'
import { MainLayout } from '~/layouts'

const Uses = () => {
  return (
    <MainLayout>
      <Meta title="Usos" />
      <div className="mt-0 sm:mt-11.2 sm:mb-3.7 text-primary-600 dark:text-inherit">
        <TitleSection title="Usos" externalLinkButton={false} />
      </div>
    </MainLayout>
  )
}

export default Uses
