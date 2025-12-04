export const onRequestPost = async (context: any) => {
    const { request } = context;

    try {
        // Read the body from the client
        const body = await request.json();
        // Decide endpoint by `target` field in body: 'characters' | 'persons'
        const target = (body && body.target === 'persons') ? 'persons' : 'characters';

        // Get the client's auth header
        const authHeader = request.headers.get('Authorization');

        // Forward to Bangumi
        const response = await fetch(`https://api.bgm.tv/v0/search/${target}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader || '',
                // Use a fixed User-Agent for the proxy to ensure compliance
                'User-Agent': 'AnimeGrid/1.0 (https://github.com/ywh555hhh/anime-role-grid)',
            },
            // Remove the helper field before forwarding
            body: JSON.stringify({
                keyword: body.keyword,
                filter: body.filter,
                limit: body.limit,
                offset: body.offset,
            }),
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Allow CORS
            },
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
