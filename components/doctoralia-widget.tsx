'use client'

import { useEffect } from 'react'

export function DoctoraliaWidget() {
  useEffect(() => {
    // Load Doctoralia widget script
    const script = document.createElement('script')
    script.id = 'zl-widget-s'
    script.src = '//platform.docplanner.com/js/widget.js'
    script.async = true

    if (!document.getElementById('zl-widget-s')) {
      document.body.appendChild(script)
    }

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('zl-widget-s')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="w-full">
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.com.br/rodolfo-leite-arantes/cardiologista/santos"
        rel="nofollow"
        data-zlw-doctor="rodolfo-leite-arantes"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="false"
        data-zlw-a11y-title="Widget de marcação de consultas médicas"
      >
        Rodolfo Leite Arantes - Doctoralia.com.br
      </a>
    </div>
  )
}
