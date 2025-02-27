// Lista de grupos e URLs para os 40 cards
const grupos = [
    { nome: 'Ocultinhos', url: 'grupo1.html', img: 'https://cdn1.cdn-telegram.org/file/Zy5ktREnECN56yeO1UIdIjFMMIJavhQtABn8thZ7NYbdb_RrGLbkUNtqYIL8W10hznFasoSuTqgfBmH9MSB0O4oa6TKdgcxKA5C2oqjr2oXUpV98s39nndHY90YbIL0-moOio1eSdc8OvF2qTmM9DNgYqkGMxT-59FOK9TLuEPs5CVzCuLMZwjN59L8i-ULIMY6yOM5kA0To51NSBfy-CQC_QP_GrwaV8mNctdpFSkMaL6yJG2uLg-v-NMY3tuuL9VMfHdc41M9zzgqoeeyafZAzD4rwWrHmbHEfsjpBkDOSstrwXBQq_13fjGPQF0us_kB51jwHOTsr_niu8IPK7Q.jpg' },
    { nome: 'Segredinhos', url: 'grupo2.html', img: 'https://cdn1.cdn-telegram.org/file/YgTZ1KlKwduMu2In492BLkH7_fHNhzgu_F9LDQ2bkhtTr-51AZ23sweMVJuP6c_SiSLJUBySyVFMP-XOneKpltiUoGQX-QyxmVS6NRVfrmq6rJnshVqV5SDG1kbiWniC0OUReGnV1XS4YTujnraCVRq3yM7_tGcS_zzJLYN3s3KEollFn-NiWufNzMpaTruBNfPoJLLFmY2oIETNKew8kPy3_JWtGt6aMjJqT2aPYQc_fjIDH7xY901aopeVbEv-XAZnRCz58ztha9trBT04LLEIzKULwsFpK7ccqo79YBqab7MB-dc9TWm20KIGCE4KFaguyNxnvnAuCWDRihfjWQ.jpg' },
    { nome: 'Ilha do pecado', url: 'grupo3.html', img: 'https://cdn1.cdn-telegram.org/file/FR7CgCPJTh5enDvR6v7nQnD8KbycP5jEAamoCqweisdlP3tADFseb5mSUkdGBTvRnnxl9q0e3fddy-wW4OUg2gzra9t77BMPbxeSVzCLvG8OMP9o81nQF3Vipk7WGxvE3i2cg5dwKJ-X46-G6SciZ7F6xgqutpTrl_vb_cz4hqpXFcgs9XmGst5AUvQLFvBZMbFiIKxgbFLcxZUb6yDxIeDQAfs7rm3c0dZA9qiOZl-6LXLcENgOrMK8fT8J5SvK6saQxQkR3cPcE9dx7a1gNNIrfaoMpnCpe-oYQUNnP7NyUvnMNQD5JpwqL4BMLfTx2E6-CxS9u-WdcRpwFuF-ZQ.jpg' },
    { nome: 'Coroas brasileiras', url: 'grupo4.html', img: 'https://cdn1.cdn-telegram.org/file/YgPDPMMBONVxVSt3WsAGxMg2pArqG2Ie6pFdvNSNXbW2MYE2MOPjea8CSiSHZgCwQFxNL189GK5GpmO0SF67q4E7r9eMWIeEfe20tCLLSBmvmaJSrPB_47KVQlDgOF58pTQ92ALtpUpIJrH1VOu6aEL1cBX1Sg7ggDZED-w8i7bFAlrDQ0d_IlnfgeVWsZAnP-VjuCjh-TVXw29YVHqywvQyWDf0uQcCjAEKXMCzpuzaHy4ns2kzvUx-q2_1kf-1Z4Gk3_S8fhIc3t6Cn8Z61AVVjC_Uvy9R7wq4VoiIaLXXm5y5NwOhHl_nYF0OmMthHHkuPVOz8By_Vu0acY4v3Q.jpg' },
    { nome: 'Cornos Brasil', url: 'grupo5.html', img: 'https://cdn1.cdn-telegram.org/file/NKMzqWF2diZzb6wmcWNNuJLP2YFrBM-j3gmHB-ARcOdvayI_9fzgKAHGOXQF7CAY9ciOfLECdx6wAa_Dal6xe2Uy25Ek_GceCwfxSeX2XaZ1E_OFnCzbcucJCSJylXIu1iX78-55jJ4jsiUuey4-yyFcv2aQUFApKs-TbtB7AlENL7zTOTBftXsdXeqPG-0DPcAAyW9gwC_NUku_JInU9DLmmrbJVbLPqTxd-e2ikMKcsr81XMek6RtqPaTAglpWbslaN3iQ0NYCWmvNsHobbqDjxPn8vzHh-3HRW3gVxui6hfKAf_b_PoG7-B_vwIRtm7M5USMp5AjPnh4_c521xA.jpg' },
    { nome: 'Grupo 6', url: 'grupo6.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 7', url: 'grupo7.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 8', url: 'grupo8.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 9', url: 'grupo9.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 10', url: 'grupo10.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 11', url: 'grupo11.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 12', url: 'grupo12.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 13', url: 'grupo13.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 14', url: 'grupo14.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 15', url: 'grupo15.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 16', url: 'grupo16.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 17', url: 'grupo17.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 18', url: 'grupo18.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 19', url: 'grupo19.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 21', url: 'grupo21.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 22', url: 'grupo22.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 23', url: 'grupo23.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 24', url: 'grupo24.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 25', url: 'grupo25.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 26', url: 'grupo26.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 27', url: 'grupo27.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 28', url: 'grupo28.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 29', url: 'grupo29.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 31', url: 'grupo31.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 32', url: 'grupo32.html', img: 'https://via.placeholder.com/100' },
    { nome: 'Grupo 33', url: 'grupo33.html', img: 'https://via.placeholder.com/100' },

];


// Função para criar os cards
function carregarCards(gruposExibidos) {
    const container = document.getElementById('cards-container');
    gruposExibidos.forEach(grupo => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${grupo.img}" alt="${grupo.nome}">
            <div class="group-name">${grupo.nome}</div>
            <a href="${grupo.url}" class="btn-join">Entrar</a>
        `;

        container.appendChild(card);
    });
}

// Inicialmente carrega os primeiros 10 grupos
let gruposVisiveis = grupos.slice(0, 10);
let gruposFiltrados = gruposVisiveis; // Variável de controle para grupos filtrados
document.addEventListener('DOMContentLoaded', () => carregarCards(gruposFiltrados));

// Função de filtro de grupos
function filterGroups() {
    const input = document.getElementById('search-input').value.toLowerCase();
    gruposFiltrados = grupos.filter(grupo => grupo.nome.toLowerCase().includes(input));
    carregarCards(gruposFiltrados); // Recarregar com os grupos filtrados
}

// Variáveis de controle para o carregamento
let groupsLoadedCount = 10;  // Contador de grupos carregados
const maxGroups = grupos.length;  // Total de grupos disponíveis

// Função para verificar a direção de rolagem e carregamento contínuo
let lastScrollTop = 0;  // A última posição de rolagem
let isLoading = false; // Flag para verificar se estamos carregando mais grupos

window.addEventListener('scroll', function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica se o usuário rolou para baixo
    if (currentScrollTop + window.innerHeight >= document.documentElement.scrollHeight - 5) {
        if (!isLoading && groupsLoadedCount < maxGroups) {
            isLoading = true; // Define o flag para evitar chamadas repetidas enquanto estamos carregando
            // Carregar mais grupos quando o usuário chegar ao final da página
            const gruposRestantes = grupos.slice(groupsLoadedCount, groupsLoadedCount + 10);
            groupsLoadedCount += gruposRestantes.length;
            carregarCards(gruposRestantes);

            // Simular um pequeno delay para uma transição mais suave
            setTimeout(() => {
                isLoading = false; // Libera o carregamento para novos dados
            }, 300); // Ajuste de tempo para controle suave
        }
    }

    // Verifica se o usuário rolou para cima
    if (currentScrollTop < lastScrollTop && currentScrollTop === 0) {
        // Se o usuário rolou para cima até o topo, recarrega os primeiros 10 grupos
        groupsLoadedCount = 10;
        carregarCards(grupos.slice(0, 10));

        // Volta para o topo da página de forma suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Evita rolagem negativa
});