interface DeepLinkData {
    source: string;
    medium: string;
    campaign: string;
    timestamp: string;
}

export const generateDeepLink = (answers: Record<number, string>): string => {
    // Создаем объект с данными для deep link
    const deepLinkData: DeepLinkData = {
        source: 'web_quiz',
        medium: 'quiz_completion',
        campaign: 'app_download',
        timestamp: new Date().toISOString()
    };

    // Сохраняем данные в localStorage
    localStorage.setItem('deepLink', JSON.stringify(deepLinkData));
    localStorage.setItem('quizAnswers', JSON.stringify(answers));

    // Формируем URL для открытия Android приложения
    const scheme = 'quizapp';
    const host = 'open';
    const params = new URLSearchParams({
        source: deepLinkData.source,
        medium: deepLinkData.medium,
        campaign: deepLinkData.campaign,
        timestamp: deepLinkData.timestamp
    });

    return `${scheme}://${host}?${params.toString()}`;
};

export const openAndroidApp = (deepLink: string): void => {
    // Пытаемся открыть Android приложение
    window.location.href = deepLink;

    // Если приложение не установлено, перенаправляем на страницу загрузки
    setTimeout(() => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.quizapp';
    }, 2000);
}; 