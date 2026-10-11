# AI Marketing Portfolio

A responsive, multi-page portfolio for an AI marketing expert serving small and medium-sized businesses. The site includes a complete homepage, About, Services, searchable Blog, individual article routes, Contact, Privacy, sitemap, robots file, and a useful 404 page.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open the local URL printed in the terminal. Build the production version with `npm run build`. Run `npx tsc --noEmit` for a focused type check.

### Windows preview fallback

If `npm run dev` reports a Workers runtime access violation on Windows, the saved site code is not the cause. Build and run the local production preview instead:

```bash
npm run build
npm run preview
```

Then open `http://127.0.0.1:5173/`. This fallback serves the same generated application without relying on the failing Miniflare development runtime. Updating the Microsoft Visual C++ Redistributable may restore hot-reload development mode.

## Personal details to update

Edit `lib/site-config.ts` to replace the clearly marked name, brand, email, booking, location, and social placeholders. If you add a booking URL, update `consultationHref` to that URL or keep it pointed at the consultation request form.

No biography, credentials, client results, testimonials, awards, or profile portrait have been invented. Add only verified information. Replace the profile placeholder on `app/about/page.tsx` with a real, optimized photo when available.

## Services

The proposed services are stored in `lib/services.ts`. Each entry contains the customer problem, typical deliverables, and intended benefits. Review the offer before launch; pricing and guaranteed outcomes are intentionally absent.

## Blog workflow

Starter articles live in `content/articles.ts`, separate from page components. Each article has metadata, an introduction, sections, and a `status` field.

1. Review the title, date, summary, and full article.
2. Make any edits needed to match your expertise and voice.
3. Change `status: "draft"` to `status: "published"`.
4. Published articles are then included in the generated sitemap. Draft labels remain visible while an article is still under review.

## Contact form integration

The form posts to the server-only endpoint at `app/api/contact/route.ts`. It includes server-side schema validation, a hidden bot field, request throttling, length limits, basic safe text handling, and honest delivery responses. Entered data is preserved when delivery fails.

Delivery uses [Resend](https://resend.com). Copy `.env.example` to `.env.local` and provide:

- `RESEND_API_KEY`: a Resend API key.
- `CONTACT_TO_EMAIL`: the inbox that should receive inquiries.
- `CONTACT_FROM_EMAIL`: a sender on a domain verified in Resend.

Without these values the endpoint returns `503` and the form clearly says delivery is not active; it never simulates success. Test a real submission after configuration and confirm it reaches the intended inbox before launch.

## Privacy and metadata

Review `app/privacy/page.tsx` with the final business identity, location, retention practice, and legal requirements. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain so sitemap and robots links are canonical. No analytics or tracking scripts are included.

## Deployment

Run `npm run build` and deploy the generated Cloudflare-compatible output through your chosen host. This project was intentionally left unpublished.

## Launch checklist

- Replace the name, brand, email, and location placeholders.
- Add a verified booking URL or keep the consultation request flow.
- Add social links only when they are real.
- Add a real profile photo and verified biography.
- Review the proposed services and all three article drafts.
- Configure and test Resend delivery.
- Review the privacy notice for your jurisdiction.
- Set the final site URL and verify page metadata.
