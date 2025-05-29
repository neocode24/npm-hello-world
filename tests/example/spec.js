const { test, expect } = require('@playwright/test');

test('텍스트가 있는지 확인', async ({ page }) => {
  // 간단한 HTML 페이지 생성
  const htmlContent = `
    <html>
      <body>
        <h1>안녕하세요 Playwright</h1>
        <p>이것은 테스트용 문장입니다.</p>
      </body>
    </html>
  `;

  // 해당 HTML 콘텐츠를 데이터 URL로 로드
  await page.goto(`data:text/html,${encodeURIComponent(htmlContent)}`);

  // h1 요소가 정확한 텍스트를 포함하는지 확인
  await expect(page.locator('h1')).toHaveText('안녕하세요 Playwright');
});
