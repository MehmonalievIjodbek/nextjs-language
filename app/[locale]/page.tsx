import { getI18n, getScopedI18n } from '../../locales/server'

export default async function Page() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('hello')

  return (
    <div>
      <p>{t('hello')}</p>
    </div>
  )
}
