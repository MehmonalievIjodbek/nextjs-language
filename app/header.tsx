'use client'

import Link from 'next/link'
import { useChangeLocale, useCurrentLocale } from '../locales/client'

import type { MenuProps } from 'antd'
import { Button, Dropdown, Space } from 'antd'
import EngIcon from './[locale]/components/common/icons/language-en-icon'
import RuIcon from './[locale]/components/common/icons/language-ru-icon'

export function Header() {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button type="button" onClick={() => changeLocale('en')}>
          EN
        </button>
      ),
    },
    {
      key: '2',
      label: (
        <button type="button" onClick={() => changeLocale('ru')}>
          RU
        </button>
      ),
    },
  ]

  return (
    <header>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown menu={{ items }} placement="bottom">
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              {currentLocale === 'en' ? <EngIcon /> : <RuIcon />}
              <p style={{ fontSize: '24px', textTransform: 'uppercase' }}>
                {currentLocale}
              </p>
            </div>
          </Dropdown>
        </Space>
      </Space>
    </header>
  )
}
