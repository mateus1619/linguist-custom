(async () => {
    from = 'detect'
    to = 'en'
    text = encodeURIComponent('24$%#$%')

    try {
        const params = `source_lang=${from}&target_lang=${to}&text=${text}`;
        const response = await fetch(`https://aitrans-orpin.vercel.app/aitrans?${params}`, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) {
            console.error('[LOG] Network error')
        }

        const data = await response.json();
        console.log(data)
        return data || `[ERROR] Translating "${text}"`;
    } catch (error) {
        console.error('[LOG] Translation:', error);
        return `[ERROR] ${error.message}`;
    }
})()